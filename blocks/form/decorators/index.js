import { applyRuleEngine } from '../rules/index.js';
import { transformFileDOM, transformFileRequest } from './attachments.js';
import { transformCaptchaDOM, transformCaptchaRequest } from './recaptcha.js';
import transferRepeatableDOM from './repeat.js';

export const transformers = [
  transformFileDOM,
  transferRepeatableDOM,
  applyRuleEngine,
];

export const asyncTransformers = [
];

export const requestTransformers = [
  transformFileRequest,
];
