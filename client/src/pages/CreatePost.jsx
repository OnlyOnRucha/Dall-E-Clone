import Reac, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {preview} from '../assets';
import {getRandomPrompt} from '../utils';
import {FormField, Loader} from '../components';

const CreatePost = () => {

  const navigate = useNavigate(); //it will send you back to the home page once the image is generated
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  const [generatingImg, setGeneratingImg] = useState(false); //this will be used when we're making a contact with our API and waiting to get back image
  const [loading, setLoading] = useState(false);

  const generateImage = () => {
    
  };

  const handleSubmit = () => {

  };

  const handleChange = (e) => { //event e as its first and only param, will change the set and set it to newly added values, that's how you can get input through your form fileds
    setForm({ ...form, [e.target.name]: e.target.value})
  };
 
  //this will always call our utility function to ensure that we get a new prompt
  const handleSurpriseMe = () => {
    const randonPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randonPrompt})
  };
  

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
            <h1 className='font-extrabold text-[#222328] text-[32px]'>
            Create
            </h1>
            <p className='mt-2 text-[666e75] text-[16px] max-w [500px]' >
              Create imaginative and visually stunning images generated by DALL-E AI and share them with the community</p>
        </div>

        <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-5'> 
          {/* this is going to be used to position our formField */}
          <FormField 
            labelName = "Your name"
            type = "text"
            name = "name"
            placeholder = "Jane Doe"
            value = {form.name}
            handleChange = {handleChange}
          />
          <FormField 
            labelName = "Prompt"
            type = "text"
            name = "prompt"
            placeholder = "cute puppies playing in a grass field"
            value = {form.prompt}
            handleChange = {handleChange}
            isSurpriseMe
            handleSurpriseMe = {handleSurpriseMe}
          />

          <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
            {/* dynamic code block */}
            {form.photo ? (
              <img src={form.photo} alt={form.prompt} className='w-full h-full object-contain'/>
            ) : (
              <img src={preview} alt={preview} className='w-9/12 h-9/12 object-contain opacity-40'/>
            )}

            {generatingImg && (
              <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                <Loader />
              </div>
            )}
          </div>
          </div>

          <div className='mt-5 flex gap-5'>
            <button type='button' onClick={generateImage} className='text-white bg-green-700 font-medium rounded-md w-full sm:w-auto text-sm  px-5 py-2.5 text-center'>
              {generatingImg ? 'Generating...' : 'Generate Image'}
            </button>
          </div>

          <div className='mt-10'>
            <p className='mt-2 text-[#666e75] text-[14px]'>Once you have created the image you wanted, you can share it with the community!!</p>
            <button type='submit' className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center '>
              {loading ? 'Sharing' : 'Share with the community'}
            </button>
          </div >

        </form>
    </section>
  )
}

export default CreatePost;