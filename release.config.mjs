/* eslint-disable prettier/prettier */
/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: [
    'main',
    {
      name: 'dev-release',
      prerelease: true,
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    {
      // Customize changelog generation
      path: '@semantic-release/changelog',
      changelogTitle:
        '# Changelog\n\nAll notable changes to this project will be documented in this file.',
      changelogFile: 'CHANGELOG.md',
      prepare: [
        {
          path: '@semantic-release/changelog',
          changelogFile: 'CHANGELOG.md',
          changelogTitle:
            '# Changelog (Main)\n\nAll notable changes to this project will be documented in this file.',
          channel: 'main',
        },
        {
          path: '@semantic-release/changelog',
          changelogFile: 'CHANGELOG.dev.md',
          changelogTitle:
            '# Changelog (Beta)\n\nAll notable changes to this project in development will be documented in this file.',
          channel: 'dev-release',
        },
      ],
    },
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md', 'CHANGELOG.dev.md'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
};
