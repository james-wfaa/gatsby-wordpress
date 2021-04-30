const { resolve } = require(`path`)
const path = require(`path`)
const glob = require(`glob`)
const chunk = require(`lodash/chunk`)
const { dd } = require(`dumper.js`)
const redirects = require("./redirects.json");


const getTemplates = () => {
  const sitePath = path.resolve(`./`)
  return glob.sync(`./src/templates/**/*.js`, { cwd: sitePath })
}

//
// @todo move this to gatsby-theme-wordpress
exports.createPages = async ({ actions, graphql, reporter }) => {
  const templates = getTemplates()

  const {
    data: {
      allWpContentNode: { nodes: contentNodes },
    },
  } = await graphql(/* GraphQL */ `
    query ALL_CONTENT_NODES {
      allWpContentNode(
        sort: { fields: modifiedGmt, order: DESC }
        filter: { nodeType: { ne: "MediaItem" } }
      ) {
        nodes {
          nodeType
          uri
          id
        }
      }
    }
  `)

  const contentTypeTemplateDirectory = `./src/templates/single/`
  const contentTypeTemplates = templates.filter((path) =>
    path.includes(contentTypeTemplateDirectory)
  )

  await Promise.all(
    contentNodes.map(async (node, i) => {
      const { nodeType, uri, id } = node

      let templatePath = `${contentTypeTemplateDirectory}${nodeType}.js`
      // get some exceptions
      switch(uri) {
        case '/email/':
          templatePath = `${contentTypeTemplateDirectory}${nodeType}Email.js`
          break
        case '/events/':
          templatePath = `${contentTypeTemplateDirectory}${nodeType}Events.js`
          break
        case '/news/':
          templatePath = `${contentTypeTemplateDirectory}${nodeType}News.js`
          break
        default:
          break
      }

      //console.log("templatePath:",templatePath)

      const contentTypeTemplate = contentTypeTemplates.find(
        (path) => path === templatePath
      )

      if (!contentTypeTemplate) {
        dd(node)
        reporter.log(``)
        reporter.log(``)
        reporter.panic(
          `[using-gatsby-source-wordpress] No template found at ${templatePath}\nfor single ${nodeType} ${
            node.id
          } with path ${
            node.uri
          }\n\nAvailable templates:\n${contentTypeTemplates.join(`\n`)}`
        )
      }

      let updatedPath;
      if (nodeType === 'Post') {
        updatedPath = `/news${uri}`
      } else {
        updatedPath = uri
      }

      await actions.createPage({
        component: resolve(contentTypeTemplate),
        path: updatedPath,
        context: {
          id,
        },
      })
    })
  )

  // create the homepage

  const {
    data: { allWpPost },
  } = await graphql(/* GraphQL */ `
    {
      allWpPost(sort: { fields: modifiedGmt, order: DESC }) {
        nodes {
          uri
          id
        }
      }
    }
  `)

  const perPage = 10
  const chunkedContentNodes = chunk(allWpPost.nodes, perPage)

  await Promise.all(
    chunkedContentNodes.map(async (nodesChunk, index) => {
      const firstNode = nodesChunk[0]
      const page = index + 1
      const offset = perPage * index

      await actions.createPage({
        component: resolve(`./src/templates/index.js`),
        path: page === 1 ? `/blog/` : `/blog/${page}/`,
        context: {
          firstId: firstNode.id,
          page: page,
          offset: offset,
          totalPages: chunkedContentNodes.length,
          perPage,
        },
      })
    })
  )

  

  
  const { createRedirect } = actions;
	
	redirects.forEach(redirect => 
		createRedirect({
	    fromPath: redirect.fromPath,
	    toPath: redirect.toPath,
	  })
	)
}
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type WpBlockAttributesObject {
      foobar: String
    }
  `;
  createTypes(typeDefs);
}
