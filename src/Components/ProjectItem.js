import React, { PureComponent } from 'react';

export default class ProjectItem extends PureComponent {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {

    return (
      <li className="Project">
<strong>  {this.props.project.title} </strong> :
  {this.props.project.category}
  : <a href='#' onClick={this.deleteProject.bind(this,  this.props.project.id)}> X </a>
      </li>
    );
  }
}
