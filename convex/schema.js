import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    tokenIdentifier: v.string(),
    imageUrl: v.optional(v.string()),

    plan: v.union(v.literal('free'), v.literal('pro')),

    //Usage tracking for plans limit
    projectsUsed: v.number(), // Current projects count
    exportsThisMonth: v.number(), // Monthly exports count

    createdAt: v.date(),
    lastActiveAt: v.date(),
  })
    .index('by_token', ['tokenIdentifier'])
    .index('by_email', ['email'])
    .searchIndex('search_name', { searchField: 'name' })
    .searchIndex('search_email', { searchField: 'email' }),
})
