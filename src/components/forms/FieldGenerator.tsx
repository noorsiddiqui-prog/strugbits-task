import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Dropzone from 'react-dropzone'
import { Input } from '.'

// export interface FieldConfig {
//   name: string
//   type: string
//   label: string
//   validation?: Yup.StringSchema<any> | Yup.MixedSchema<any>
//   value?: any
// }
// const fieldConfig: FieldConfig[] = [
//   {
//     name: 'customerName',
//     type: 'text',
//     label: 'Customer Name',
//     validation: Yup.string().required('Customer Name is required'),
//   },
//   {
//     name: 'email',
//     type: 'email',
//     label: 'Email',
//     validation: Yup.string()
//       .email('Invalid email')
//       .required('Email is required'),
//   },
//   {
//     name: 'image',
//     type: 'dropzone',
//     label: 'Image',
//     validation: Yup.mixed()
//       .test('fileSize', 'File too large', (value: any) => {
//         if (value) {
//           return value[0].size <= 1024 * 1024 // Set the file size limit (1MB in this example)
//         }
//         return true
//       })
//       .test('fileType', 'Unsupported file type', (value: any) => {
//         if (value) {
//           const acceptedTypes = ['image/jpeg', 'image/png'] // Define accepted file types
//           return acceptedTypes.includes(value[0].type)
//         }
//         return true
//       })
//       .nullable(),
//   },
//   // Add more fields as needed
// ]
// interface FieldGeneratorInterface {
//   onSubmit: (value: any) => void
// }

// const FieldGenerator: React.FC<FieldGeneratorInterface> = ({
//   onSubmit,
// }: FieldGeneratorInterface) => {
//   const initialValues: { [key: string]: any } = {}
//   fieldConfig.forEach((field) => {
//     initialValues[field.name] = ''
//   })

//   const validationSchema = Yup.object().shape(
//     fieldConfig.reduce((acc: any, field) => {
//       if (field.validation) {
//         acc[field.name] = field.validation
//       }
//       return acc as Record<
//         string,
//         Yup.StringSchema | Yup.MixedSchema | undefined
//       > // Type assertion
//     }, {}),
//   )
//   const [uploadedFiles, setUploadedFiles] = React.useState<File[]>([])

//   const handleDrop = (acceptedFiles: File[]) => {
//     // Handle dropped image files
//     console.log(acceptedFiles)
//     setUploadedFiles(acceptedFiles)
//   }

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={onSubmit}
//     >
//       {({ isSubmitting }) => (
//         <Form className="flex flex-col items-center ">
//           {fieldConfig.map((field) => (
//             <div key={field.name} className="w-full">
//               <label htmlFor={field.name} className="text-base font-medium">
//                 {field.label}
//               </label>
//               {field.type === 'text' || field.type === 'email' ? (
//                 <Field name={field.name}>
//                   {({ field }: any) => (
//                     <div className="mb-4">
//                       <Input
//                         name={field.name}
//                         onChange={field.onChange}
//                         type={field.type}
//                         value={field.value}
//                       />
//                     </div>
//                   )}
//                 </Field>
//               ) : field.type === 'dropzone' ? (
//                 <Dropzone onDrop={handleDrop}>
//                   {({ getRootProps, getInputProps }) => (
//                     <div
//                       {...getRootProps()}
//                       className="dropzone border border-dashed p-4 items-center flex justify-center"
//                     >
//                       <input {...getInputProps()} />
//                       {uploadedFiles && uploadedFiles.length > 0 ? (
//                         <p>
//                           {uploadedFiles &&
//                             uploadedFiles.length > 0 &&
//                             uploadedFiles[0].name}{' '}
//                         </p>
//                       ) : (
//                         <p>
//                           Drag 'n' drop some files here, or click to select
//                           files
//                         </p>
//                       )}
//                     </div>
//                   )}
//                 </Dropzone>
//               ) : null}
//               <ErrorMessage
//                 name={field.name}
//                 component="div"
//                 className="error"
//               />
//             </div>
//           ))}
//           <button
//             type="submit"
//             className="bg-green-800 px-4 py-2 mt-4 text-white rounded-md"
//             disabled={isSubmitting}
//           >
//             Submit
//           </button>
//         </Form>
//       )}
//     </Formik>
//   )
// }

// export default FieldGenerator
export interface FieldConfig {
  name: string // Name of the field
  type: string // Type of input (e.g., text, email, dropzone)
  label: string // Label for the field
  validation?: Yup.StringSchema<any> | Yup.MixedSchema<any> // Validation rules using Yup
  value?: string // Initial or default value for the field
}
interface FieldGeneratorProps {
  fieldConfig: FieldConfig[]
  onSubmit: (values: any) => void
  initialValues: { [key: string]: any }
  isEditMode?: boolean
  handleDrop: (acceptedFiles: File[]) => void
  uploadedFiles?: any[]
}

const FieldGenerator: React.FC<FieldGeneratorProps> = ({
  fieldConfig,
  onSubmit,
  initialValues,
  isEditMode = false,
  handleDrop,
  uploadedFiles,
}) => {
  const validationSchema = Yup.object().shape(
    fieldConfig.reduce((acc: any, field) => {
      if (field.validation) {
        acc[field.name] = field.validation
      }
      return acc as Record<
        string,
        Yup.StringSchema | Yup.MixedSchema | undefined
      >
    }, {}),
  )

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col items-center">
          {fieldConfig.map((field) => (
            <div key={field.name} className="w-full">
              <label htmlFor={field.name} className="text-base font-medium">
                {field.label}
              </label>
              {field.type === 'text' || field.type === 'email' ? (
                <Field name={field.name}>
                  {({ field }: any) => (
                    <div className="mb-4">
                      <Input
                        name={field.name}
                        onChange={field.onChange}
                        type={field.type}
                        value={field.value}
                      />
                    </div>
                  )}
                </Field>
              ) : field.type === 'dropzone' ? (
                <Dropzone onDrop={handleDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <div
                      {...getRootProps()}
                      className="dropzone border border-dashed p-4 items-center flex justify-center"
                    >
                      <input {...getInputProps()} />
                      {uploadedFiles && uploadedFiles.length > 0 ? (
                        <p>
                          {uploadedFiles &&
                            uploadedFiles.length > 0 &&
                            uploadedFiles[0].name}{' '}
                        </p>
                      ) : (
                        <p>
                          Drag 'n' drop some files here, or click to select
                          files
                        </p>
                      )}
                    </div>
                  )}
                </Dropzone>
              ) : null}
              <ErrorMessage
                name={field.name}
                component="div"
                className="error"
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-green-800 px-4 py-2 mt-4 text-white rounded-md"
            disabled={isSubmitting}
          >
            {isEditMode ? 'Update' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default FieldGenerator
