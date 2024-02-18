import { TextFieldElement } from "../../components/Form-elements/TextFieldElement"
import FormContainer from "../../components/Form-elements/FormContainer"

function Form2({formName, control, setIsValid}) {
  return (
    <FormContainer formName={formName} control={control} setIsValid={setIsValid}>
      <TextFieldElement
        type='text'
        name={'country'}
        label={'Страна'}
        control={control}
        required={false}
        minLength={2}
      />
      <TextFieldElement
        type='text'
        name={'city'}
        label={'Город'}
        control={control}
        required={false}
        minLength={2}
      />
    </FormContainer>
  )
}

export default Form2
