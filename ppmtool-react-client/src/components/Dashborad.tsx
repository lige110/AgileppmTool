import React from "react";
import CreateProjectButton from "./Project/CreateProjectButton";
import ProjectItem from "./Project/ProjectItem";
import { getProjects } from "../actions/projectActions";
import { connect } from "react-redux";
import { Project } from "../model/Project";

class Dashborad extends React.Component<any, any> {
  componentWillMount() {
    // console.log("Dashboard willl Mount!");
    // this.props.getProjects(this.props.history);
  }
  componentDidMount() {
    // console.log("Dashboard Did Mount!");
    this.props.getProjects(this.props.history);
  }

  render() {
    // console.log("DashBoard render here!");
    const projects = this.props.projects.projectList;
    // console.log(`The projects is ${projects}`);

    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectButton />
              <br />
              <hr />
              {projects.map((project: Project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  projects: state.projects,
});

export default connect(mapStateToProps, { getProjects })(Dashborad);
