import { ForbiddenException } from '@nestjs/common'
import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql'
import { Role } from '../enums/roles.enum'

export const checkRoleMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn
) => {
  const { info } = ctx
  const { extensions } = info.parentType.getFields()[info.fieldName]

  const userRole = Role.USER

  if (userRole == extensions.role) {
    throw new ForbiddenException(
      `User doesn't have sufficient permissions to access "${info.fieldName}" field`
    )
  }

  return next()
}
