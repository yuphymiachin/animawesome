'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from 'react-hook-form';
// import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation';
import { useMemo, useState } from "react";

import usePostModal from '@/app/hooks/usePostModal';

import Modal from "./Modal";
import Counter from "../inputs/Counter";
import CategoryInput from '../inputs/CategoryInput';
// import CountrySelect from "../inputs/CountrySelect";
import { categories } from '../navbar/Categories';
import ImageUpload from '../inputs/ImageUpload';
import Input from '../inputs/Input';
import Heading from '../Heading';

enum STEPS {
  CATEGORY = 0,
  // ANIMALID = 1,
  IMAGES = 1,
  // DESCRIPTION = 2,
  // PAYPAL = 2,
}

const PostModal = () => {
  const router = useRouter();
  const postModal = usePostModal();

  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.CATEGORY);

  const { 
    register, 
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      // location: null,
      // animalCount: 1,
      // roomCount: 1,
      // bathroomCount: 1,
      imageSrc: '',
      // paypal: '',
      // title: '',
      description: '',
    }
  });

  // const location = watch('location');
  const category = watch('category');
  // const animalCount = watch('animalCount');
  // const roomCount = watch('roomCount');
  // const bathroomCount = watch('bathroomCount');
  const imageSrc = watch('imageSrc');

  // const Map = useMemo(() => dynamic(() => import('../Map'), { 
  //   ssr: false 
  // }), [location]);


  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const onBack = () => {
    setStep((value) => value - 1);
  }

  const onNext = () => {
    setStep((value) => value + 1);
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.IMAGES) {
      return onNext();
    }
    
    setIsLoading(true);

    axios.post('/api/posts', data)
    .then(() => {
      toast.success('Post successfully!');
      router.refresh();
      reset();
      setStep(STEPS.CATEGORY)
      postModal.onClose();
    })
    .catch(() => {
      toast.error('Something went wrong.');
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.IMAGES) {
      return 'Create'
    }
    return 'Next'
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined
    }
    return 'Back'
  }, [step]);

  // STEP 0: 選一個catergory
  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your animal?"
        subtitle="Pick a category"
      />
      <div 
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => 
                setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  )


  // 動物的基本資訊:
  // if (step === STEPS.ANIMALID) {
  //   bodyContent = (
  //     <div className="flex flex-col gap-8">
  //       <Heading
  //         title="Please select the animal you want to post:"
  //       />
  //        <Counter 
  //         onChange={(value) => setCustomValue('animalCount', value)}
  //         value={animalCount}
  //         title="Number of animals" 
  //         subtitle="How many animals do you have?"
  //       />
  //       <hr />
  //       <Counter 
  //         onChange={(value) => setCustomValue('roomCount', value)}
  //         value={roomCount}
  //         title="Rooms" 
  //         subtitle="How many rooms do you have?"
  //       />
  //       <hr />
  //       <Counter 
  //         onChange={(value) => setCustomValue('bathroomCount', value)}
  //         value={bathroomCount}
  //         title="Bathrooms" 
  //         subtitle="How many bathrooms do you have?"
  //       /> 
  //     </div>
  //   )
  // }

  // STEP 1: 上傳照片和介紹
  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add a photo!"
          subtitle="It's time to show off your brilliant animals"
        />
        <ImageUpload
          value={imageSrc}
          onChange={(value) => setCustomValue('imageSrc', value)}
        />
        <Heading
          title="How would you describe this photo?"
          subtitle="Short and sweet works best!"
        />
        <Input
          id="description"
          label="Description"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }


  // if (step === STEPS.PAYPAL) {
  //   bodyContent = (
  //     <div className="flex flex-col gap-8">
  //       <Heading
  //         title="Now, set your donation box"
  //         subtitle="Enter a Paypal account to accept people's donation"
  //       />
  //       <Input
  //         id="paypal"
  //         label="Paypal"
  //         disabled={isLoading}
  //         register={register}
  //         errors={errors}
  //         required
  //       />
  //     </div>
  //   )
  // }

  return (
    <Modal
      title="Post your animals"
      // disabled={isLoading}
      isOpen={postModal.isOpen}
      onClose={postModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      body={bodyContent}
    />
  );
}

export default PostModal;