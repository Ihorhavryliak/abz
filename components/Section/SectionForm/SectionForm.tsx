import React from 'react'
import InputGeneral from '../../Input/InputGeneral'
import SelectYourPosition from './SelectYourPosition/SelectYourPosition'
import ButtonGeneral from '../../Button/ButtonGeneral'
import FieldUpload from '../../Fields/FieldUpload'
import useFormData from './hooks/useFormData'

const SectionForm = () => {
  const { dataInput, register, errors, handleSubmit, onSubmit, watch } = useFormData()

  return (
    <div>
      <h2 className="font-nunito text-custom-black-100 text-[40px] leading-[100%] text-center">
        Working with GET request
      </h2>
      <div className=" flex justify-center">
        <form className="max-w-[380px] w-full">
          <div>
            {dataInput.map((input) => {
              return (
                <div key={input.id} className="mt-[50px]">
                  <InputGeneral
                    value={watch(input.name)}
                    label={input.label}
                    type={input.type}
                    item={input}
                    register={register}
                    errors={errors}
                    validation={input.validation}
                  />
                </div>
              )
            })}

            <div className="mt-[29px]">
              <SelectYourPosition />
            </div>
            <div className="mt-[50px]">
              <FieldUpload />
            </div>
            <div className="mt-[50px] flex justify-center">
              <ButtonGeneral text="Sign up" onClick={() => handleSubmit(onSubmit)()} />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SectionForm
