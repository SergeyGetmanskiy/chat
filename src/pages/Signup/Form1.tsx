import FormContainer from "../../components/Form-elements/FormContainer"
import { RadioGroupElement } from "../../components/Form-elements/RadioGroupElement"
import { TextFieldElement } from "../../components/Form-elements/TextFieldElement"
import { FormProps } from "../../interfaces/FormProps"


function Form1({formName, control, setIsNextBtnActive}: FormProps) {
  return (
    <FormContainer formName={formName} control={control} setIsNextBtnActive={setIsNextBtnActive}>
      <RadioGroupElement name='sex' control={control} required={true} />
      <TextFieldElement
        type={'text'}
        name={'firstName'}
        label={'Имя'}
        control={control}
        required={true}
        minLength={2}
        maxLength={25}
      />
      <TextFieldElement
        type={'number'}
        name={'age'}
        label={'Возраст'}
        control={control}
        required={true}
        min={18}
        max={90}
      />
    </FormContainer>
  )
}

export default Form1
