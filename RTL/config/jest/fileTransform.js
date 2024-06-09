const path = require('path');
const camelcase = require('camelcase');

// This is a custom Jest transformer turning file imports into filenames.
// https://jestjs.io/docs/en/webpack#handling-static-assets
module.exports = {
  process(src, filename) {
    const assetFilename = JSON.stringify(path.basename(filename));

    if (filename.match(/\.svg$/)) {
      // Based on how SVGR generates a component name:
      // https://github.com/gregberge/svgr/blob/5b78e5e/packages/babel-plugin-transform-svg-component/src/index.js#L4
      const pascalCaseFileName = camelcase(path.parse(filename).name, {
        pascalCase: true,
      });
      const componentName = `Svg${pascalCaseFileName}`;
      return `const React = require('react');\n` +
             `module.exports = {\n` +
             `  __esModule: true,\n` +
             `  default: ${assetFilename},\n` +
             `  ReactComponent: React.forwardRef(function ${componentName}(props, ref) {\n` +
             `    return {\n` +
             `      ...props,\n` +
             `      ref,\n` +
             `      children: ${assetFilename},\n` +
             `    };\n` +
             `  }),\n` +
             `};`;
    }

    return `module.exports = ${assetFilename};`;
  },
};
