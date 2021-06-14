const {
  ProjectGraph,
  ProjectGraphBuilder,
  ProjectGraphProcessorContext,
} = require('@nrwl/devkit');

/**
 * @param {ProjectGraph} graph
 * @param {ProjectGraphProcessorContext} context
 * @returns ProjectGraph
 */
exports.createProjectGraph = function createProjectGraph(graph, context) {
  const builder = new ProjectGraphBuilder(graph);

  // builder.addDependency("static", "feature-about", "components");

  return builder.getProjectGraph();
}
