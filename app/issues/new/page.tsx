'use client';

import { TextField,  Button } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';


interface IssueForm {
    title: string;
    description: string;
}


const NewIssuePage = () => {
    const router = useRouter();
    const {register, control, handleSubmit} = useForm<IssueForm>();
  return (
    <form className="max-w-xl space-y-5"
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post('/api/issues', data);
          router.push('/issues');          
        } catch (error) {
          console.log(error)
        }
    })}>
        <TextField.Root placeholder='Title' {...register('title')} >              
        </TextField.Root>
        <Controller 
          name="description"
          control={control}
          render={({ field }) =>  <SimpleMDE placeholder='Description' {...field} />}
        />
       
        <Button>Submit New Issue</Button>
    </form>
  )
}

export default NewIssuePage
