import * as React from 'react'



const Support = () => {

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');

    const onChangeTitle = (event : React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setTitle(newValue);
    };

    const onChangeDescription = (event : React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setDescription(newValue);
    };

    return (
        <div>
            <label>TITRE</label>
            <input 
                type='text'
                value={title}
                onChange={onChangeTitle} 
            />
            <input 
                type='textarea'
                value={description}
                onChange={onChangeDescription} 
            />
        </div>
    )
    }

export default Support