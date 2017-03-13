import React, { PureComponent } from 'react';
import ProjectItem from "./ProjectItem"

export default class Projects extends PureComponent {
    deleteProject(id){
      this.props.onDelete(id);
    }

  render() {
    let projectItems;
    if (this.props.projects){
      projectItems = this.props.projects.map(project => {
        return(
          <ProjectItem  onDelete={this.deleteProject.bind(this)}
          key={project.id} project={project} />
        );
      });
    }
    return (
      <div className="Projects">
<h3> Latest Projects</h3>
{
projectItems
}
     </div>
    );
  }
}
