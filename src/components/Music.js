import Icon from '@material-ui/core/Icon'

import { Card } from 'styles/base'

const Music = props => {
  return (
    <Card>
      <div className="image">
        {props.image && <img src={props.image} alt="Imagem da música" />}
      </div>

      <div className="info">
        <div className="title">{props.song}</div>
        <div className="subtitle">{props.singers}</div>

        <a href={props.url} target="_blank" className="link-icon">
          <Icon>launch</Icon>
        </a>
      </div>
    </Card>
  )
}

export default Music
