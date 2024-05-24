import React, { PropsWithChildren } from 'react'
import { useForm } from 'react-hook-form'

type FormProps = {
  onSubmit: () => void
}

export default function Form(formProps: PropsWithChildren<FormProps>) {
  const methods = useForm()
  const { handleSubmit } = methods

  return (
    <form onSubmit={handleSubmit(formProps.onSubmit)}>
      {React.Children.map(formProps.children, (child) => {
        if (React.isValidElement(child)) {
          return child.props.name
            ? React.createElement(child.type, {
                ...{
                  ...child.props,
                  register: methods.register,
                  key: child.props.name,
                },
              })
            : child
        }
      })}
    </form>
  )
}
