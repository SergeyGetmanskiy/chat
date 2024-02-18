import { TextFieldElement } from "../../components/Form-elements/TextFieldElement"
import FormContainer from "../../components/Form-elements/FormContainer"

function Form3({formName, control, setIsValid}) {
  return (
    <FormContainer formName={formName} control={control} setIsValid={setIsValid}>
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
