// import * as rollup from 'rollup';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
module.exports = function resolveConfig(options) {
  const extraGlobals = {
    // react: 'React',
    // 'react-dom': 'ReactDOM',
    // 'styled-components': 'styled',
    // '@emotion/react': 'emotionReact',
    // '@emotion/styled': 'emotionStyled',
  };

  if (Array.isArray(options.output)) {
    options.output.forEach((o) => {
      o.globals = { ...o.globals, ...extraGlobals };
    });
  } else {
    options.output = {
      ...options.output,
      globals: {
        ...(options?.output?.globals ?? {}),
        ...extraGlobals,
      },
    };
  }

  return options;
};
