import { getInput } from '@actions/core'
import {context, getOctokit} from '@actions/github'

const {repo: { owner, repo }} = context

// const tester = getInput('tester')
const githubToken = getInput('github-token')
const octokit = getOctokit(githubToken)
console.info(JSON.stringify(context))

