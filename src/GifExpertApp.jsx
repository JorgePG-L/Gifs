import {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( value) => {
      if (categories.includes(value)) {return};
      setCategories([value,...categories] )
    }

  return (
    <>
    
      <h1>GiftExpertApp</h1>
      
        <AddCategory onAddCategory={onAddCategory} />
      
      
      
        {categories.map((category) => (
            <GifGrid key = {category} 
            category = {category} />
            ))}
      
    </>
  )
}

export default GifExpertApp
