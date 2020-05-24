// Define prompts for use with npm 'prompt' module in setup script
module.exports = [
  {
    name: 'weathon',
    description: 'Project name (default: new-project)',
    pattern: /^[^._][a-z0-9-_~]+$/,
    message: 'Limited to: lowercase letters, numbers, period, hyphen, ' +
    'underscore, and tilde; cannot begin with period or underscore.'
  },
  {
    name: 'version',
    description: 'Version (default: 0.1.0)'
  },
  {
    name: 'Ritviq sharma',
    description: 'Ritviq sharma'
  },
  
  {
    name: 'description',
    description: 'Project description'
  }
];
