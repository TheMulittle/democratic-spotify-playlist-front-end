import Header from '../Header/Header'

const layout = (props) => (
  <div>
    <Header />
    <div>Login Status</div>
    {props.children}
  </div>
)

export default layout
