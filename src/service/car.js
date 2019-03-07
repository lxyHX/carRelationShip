import { requestForm, apiPrefix } from './index'

export function queryCommentCountByTagCode (option) {
  return requestForm(apiPrefix + '/queryCommentCountByTagCode', { method: 'POST',body: option},false)
}
