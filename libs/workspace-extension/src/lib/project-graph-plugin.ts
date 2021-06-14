import { ProjectGraph,  ProjectGraphBuilder, ProjectGraphProcessorContext } from '@nrwl/devkit';

export function createProjectGraph(
  graph: ProjectGraph,
  context: ProjectGraphProcessorContext
): ProjectGraph {
  const builder = new ProjectGraphBuilder(graph);
  

  return builder.getProjectGraph();
}
