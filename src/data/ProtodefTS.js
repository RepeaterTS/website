import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs']);
export default new DocsSource({
  id: 'protodefts',
  name: 'ProtodefTS',
  global: 'ProtodefTS',
  repo: 'repeaterts/protodefts',
  defaultTag: 'master',
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
});
