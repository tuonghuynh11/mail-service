import { RoleTypeQueryFilter } from '~/constants/enums'

export interface Filter {
  search: string
  sort_by: string
  order_by: string
}

export interface BaseReqQuery extends Filter {
  type: RoleTypeQueryFilter
}
