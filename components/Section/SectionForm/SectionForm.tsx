import React, { useId } from 'react'
import InputGeneral from '../../Input/InputGeneral'
import SelectYourPosition from './SelectYourPositionRadio/SelectYourPositionRadio'
import ButtonGeneral from '../../Button/ButtonGeneral'
import FieldUpload from '../../Fields/FieldUpload'
import useFormData from './hooks/useFormData'
import { useSelector } from 'react-redux'
import { selectIsSuccessSendUserData } from '@/redux/slice/UsersSlice'
import FormSuccess from './FormSuccess/FormSuccess'
import sectionIdConst from '@/constants/sectionIdConst'
import Heading from '@/components/Heading/Heading'
const SING_UP = sectionIdConst.SING_UP

const SectionForm = () => {
  const key = useId()
  const { dataInput, dataFileInput, register, error, handleSubmit, onSubmit, watch } = useFormData()
  const isSuccess = useSelector(selectIsSuccessSendUserData)

  return (
    <section id={SING_UP}>
      {isSuccess ? (
        <div>
          <Heading as="h2" text="User successfully registered" />
          <div className="mt-[50px]">
            <FormSuccess />
          </div>
        </div>
      ) : (
        <>
          <Heading as="h2" text="Working with GET request" />
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
                          value={watch(input.name as 'file') as FileList}
                          label={input.label}
                          type={input.type}
                          register={register(input.name as 'name')}
                          error={error[input.name]?.message}
                        />
                      </div>
                    )
                  }
                  return (
                    <div key={`${key}${index}f`} className="mt-[43px]">
                      <SelectYourPosition
                        register={register(input.name as 'name')}
                        error={error[input.name]?.message}
                      />
                    </div>
                  )
                })}
              </form>
              <div className="mt-[50px] flex justify-center">
                <ButtonGeneral text="Sign up" onClick={() => handleSubmit(onSubmit)()} />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default SectionForm
