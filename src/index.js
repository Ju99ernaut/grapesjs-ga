import loadComponents from './components';
import loadBlocks from './blocks';

export default (editor, opts = {}) => {
  const options = {
    ...{
      // default options
      // obtain from google tag manager dashboard
      gtmId: '',
      // label for google tag manager block
      gtmLabel: 'Tag Manager',
      // category for google tag manager block
      gtmCategory: 'Google',
      // options to extend google tag manager block
      gtmBlock: {},
      // options to extend google tag manager component model
      gtmComponent: {},
      // obtain from google analytics dashboard
      gaId: '',
      // label for google analytics block
      gaLabel: 'Analytics',
      // category for google analytics block
      gaCategory: 'Google',
      // options to extend google analytics block
      gaBlock: {},
      // options to extend google analytics component model
      gaComponent: {},
    },
    ...opts
  };
  const cm = editor.getComponents;

  // Add components
  loadComponents(editor, options);
  // Add blocks
  loadBlocks(editor, options);
};