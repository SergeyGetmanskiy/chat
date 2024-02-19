import { TextFieldElement } from "../../components/Form-elements/TextFieldElement"
import FormContainer from "../../components/Form-elements/FormContainer"
import { FormProps } from "../../interfaces/FormProps"

function Form4({formName, control, setIsNextBtnActive}: FormProps) {
  return (
    <FormContainer formName={formName} control={control} setIsNextBtnActive={setIsNextBtnActive}>
      <TextFieldElement
        type='text'
        name={'username'}
        label={'Никнейм'}
        control={control}
        required={true}
        minLength={2}
      />
      <TextFieldElement
        type='password'
        name={'password'}
        label={'Пароль'}
        control={control}
        required={true}
        minLength={6}
      />
    </FormContainer>
  )
}

export default Form4
