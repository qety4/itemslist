import React from 'react'
import { categorySelectProps } from '@/libs/types/list-types'

const CategorySelect = ({ categoriesArr }: {categoriesArr: categorySelectProps}) => {
    const { mainCategory, categories, handleChange } = categoriesArr
    return (
        <select className='sub-category' required onChange={handleChange} name='category' id="">
            <option value="" disabled>{mainCategory.toUpperCase()}</option>
            {categories.map((item, index)=>{
                return <option key={index} value={item}>{item}</option>
            })
            }
        </select>
    )
}

export default CategorySelect