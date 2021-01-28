import semver from 'semver';
import DocsSource from './DocsSource';

export default new DocsSource({
  id: 'tripwire',
  name: 'Tripwire',
  global: 'Tripwire',
  repo: 'repeaterts/tripwire',
  defaultTag: 'master',
  branchFilter: branch => branch !== 'docs' && !branch.includes('greenkeeper'),
  tagFilter: tag => semver.gte(tag.replace(/^v/, ''), '3.0.0'),
});
