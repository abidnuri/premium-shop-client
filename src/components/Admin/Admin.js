import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [imageUrl, setImageUrl] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.name,
            imageUrl: imageUrl,
        }
        console.log(data);

    };
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '6ed2991a490963f34aaea2c30cd3ad6b');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                // console.log(response.data.data.display_url);
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" defaultValue="New Product" ref={register} />
            <input name="exampleRequired" type="file" onChange={handleImageUpload} />
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" placeholder="Submit" />
        </form>
    );
};

export default Admin;