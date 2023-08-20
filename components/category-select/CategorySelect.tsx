import React from 'react'
import { categorySelectProps } from '@/types/types'

const CategorySelect = ({ categoriesArr }: {categoriesArr: categorySelectProps}) => {
    const { mainCategory, categories, handleChange } = categoriesArr
    return (
        <select required onChange={handleChange} name='category' id="">
            <option value="" disabled>{mainCategory.toUpperCase()}</option>
            {categories.map((item, index)=>{
                return <option key={index} value={item}>{item}</option>
            })
            }
        </select>
    )
}

export default CategorySelect