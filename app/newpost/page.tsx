'use client'

import React, { useState } from 'react'
import './newPost.scss'
import { Post, categorySelectProps } from '@/libs/types/list-types'
import axios, { AxiosError } from 'axios'
import CategorySelect from '@/components/category-select/CategorySelect'
import { PostValidator } from '@/libs/validators/postValidator'
import { z } from 'zod'

let defaultFormFields = {
    mainCategory: '',
    title: "",
    category: "",
    description: "",
    email: "",
}

function NewPost() {
    const [formFields, setFormFields] = useState<Post>(defaultFormFields)
    const [postAdded, setPostAdded] = useState<Boolean>(false)
    const [error, setError] = useState<string | Error>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
        console.log(formFields)
    }

    const ITEMS: categorySelectProps = {
        mainCategory: 'items',
        categories: ['computers/etc.', 'transport', 'clothes', 'other'],
        handleChange: handleChange
    }
    const SERVICES: categorySelectProps = {
        mainCategory: 'services',
        categories: ['education', 'automotive', 'labor', 'event'],
        handleChange: handleChange
    }

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            const target = event.target as HTMLFormElement
            event.preventDefault()
            console.log(event)
            PostValidator.parse(formFields)
            await axios.post('http://localhost:3000/api/createPost', formFields)
            setFormFields(defaultFormFields)
            target.reset()
            setPostAdded(true)
        } catch (error) {
            if (error instanceof z.ZodError) {
                console.log('error z', error)
                setError('invalid input')
                return
            }
            if (error instanceof AxiosError) {
                console.log('error a', error)
                setError(error.response?.data)
                return
            }
            console.log('error', error)
            setError(error as Error)
        }
    }


    return (
        <>
            {postAdded ?
                <div>
                    <p>Post Succesfully Added !</p>
                </div>
                :
                <div className='new-post'>
                    <form onSubmit={(e) => submit(e)} className='new-post__form'>
                        <h1>Create Post</h1>

                        <div className='main-category'>
                            <h2>Main Category</h2>
                            <label htmlFor="">SERVICES
                                <input onChange={handleChange} value='services' name='mainCategory' type="radio" />
                            </label>

                            <label htmlFor="">ITEMS
                                <input onChange={handleChange} value='items' name='mainCategory' type="radio" />
                            </label>
                        </div>
                        <div className='sub-category'>
                            <input type="text" name='title' className='post__title' onChange={handleChange} placeholder='title' />
                            {formFields.mainCategory == '' &&
                                <select className='sub-category' name="" id="">
                                    <option disabled value="">category</option>
                                </select>
                            }
                            {
                                formFields.mainCategory == 'services' &&
                                <CategorySelect categoriesArr={SERVICES} />
                            }
                            {
                                formFields.mainCategory == 'items' &&
                                <CategorySelect categoriesArr={ITEMS} />
                            }
                        </div>

                        <div className='post-description' >
                            <textarea placeholder='post description' className='description__input' onChange={handleChange}
                                name="description" />
                        </div>

                        <div className='contact-information'>
                            <label htmlFor="">Your Contact Information</label>
                            <input name="email" className='contact__email' onChange={handleChange} placeholder="email"
                                type="email" />
                        </div>
                        <button className='create-post-btn'>create post</button>
                    </form>
                    <p className='error'>{`${error}`}</p>
                </div>
            }
        </>
    )
}

export default NewPost