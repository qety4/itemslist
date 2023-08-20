'use client'

import React, { useState } from 'react'
import './newPost.scss'
import { Post } from '../../types/types'
import axios from 'axios'
import { categorySelectProps } from '../../types/types'
import CategorySelect from '@/components/category-select/CategorySelect'

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

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        try {
            const target = event.target as HTMLFormElement
            event.preventDefault()
            console.log(event)
            axios.post('http://localhost:3000/api/createPost', formFields)
            setFormFields(defaultFormFields)
            target.reset()
            setPostAdded(true)
        } catch {
            alert('error adding post')
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
                            <p>Main Category</p>
                            <label htmlFor="">SERVICES<input onChange={handleChange} value='services' name='mainCategory' required type="radio" /></label>
                            <label htmlFor="">ITEMS<input onChange={handleChange} value='items' name='mainCategory' required type="radio" /></label>
                        </div>
                        <div className='sub-category'>
                            <input type="text" name='title' onChange={handleChange} required placeholder='title' />
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
                            <textarea placeholder='post description' className='post-description__input' onChange={handleChange} required name="description" />
                        </div>
                        <div className='contact information'>
                            <label htmlFor="">Your Contact Information</label>
                            <input name="email" onChange={handleChange} placeholder="email" required type="email" />
                        </div>
                        <button>create post</button>
                    </form>
                </div>
            }
        </>
    )
}

export default NewPost