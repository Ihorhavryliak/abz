import React from 'react'
import InputGeneral from '../../Input/InputGeneral'
import SelectYourPosition from './SelectYourPositionRadio/SelectYourPositionRadio'
import ButtonGeneral from '../../Button/ButtonGeneral'
import FieldUpload from '../../Fields/FieldUpload'
import useFormData from './hooks/useFormData'

const key = 'SectionFormKey'

const SectionForm = () => {
  const { dataInput, dataFileInput, register, error, handleSubmit, onSubmit, watch } = useFormData()

  return (
    <div>
      <h2 className="font-nunito text-custom-black-100 text-[40px] leading-[100%] text-center">
        Working with GET request
      </h2>
      <div className=" flex justify-center">
        <div className="max-w-[380px] w-full">
          <form className="max-w-[380px] w-full">
            {dataInput.map((input, index) => {
              return (
                <div key={`${key}${index}`} className="mt-[50px]">
                  <InputGeneral
                    value={watch(input.name as 'name')}
                    label={input.label}
                    type={input.type}
                    item={input}
                    register={register(input.name as 'name')}
                    error={error[input.name]?.message}
                    id={index}
                  />
                </div>
              )
            })}

            {dataFileInput.map((input, index) => {
              if (input.type === 'file') {
                return (
                  <div key={`${key}${index}f`} className="mt-[50px]">
                    <FieldUpload
                      value={watch(input.name as 'name')}
                      label={input.label}
                      type={input.type}
                      item={input}
                      register={register(input.name as 'name')}
                      error={error[input.name]?.message}
                    />{' '}
                  </div>
                )
              }
              return (
                <div key={`${key}${index}f`} className="mt-[43px]">
                  <SelectYourPosition register={register(input.name as 'name')}  error={error[input.name]?.message} />
                </div>
              )
            })}
          </form>
          <div className="mt-[50px] flex justify-center">
            <ButtonGeneral text="Sign up" onClick={() => handleSubmit(onSubmit)()} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionForm
