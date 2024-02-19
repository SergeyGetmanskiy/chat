import { TextFieldElement } from "../../components/Form-elements/TextFieldElement"
import FormContainer from "../../components/Form-elements/FormContainer"
import { FormProps } from "../../interfaces/FormProps"

function Form3({formName, control, setIsNextBtnActive}: FormProps) {
  return (
    <FormContainer formName={formName} control={control} setIsNextBtnActive={setIsNextBtnActive}>
      <TextFieldElement
        type='text'
        name={'hobby'}
        label={'Хобби'}
        control={control}
        required={false}
        minLength={2}
      />
    </FormContainer>
  )
}

export default Form3
