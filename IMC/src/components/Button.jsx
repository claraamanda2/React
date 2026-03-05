import "./Button.css"

const Button = ({id, teste, action}) => {
const handleAction = (e) => {
  action(e);
}
  return <Button id={id} onClick={handleAction}> Limpar </Button>
}

export default Button
