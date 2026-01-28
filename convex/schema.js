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

    createdAt: v.number(),
    lastActiveAt: v.number(),
  })
    .index('by_token', ['tokenIdentifier'])
    .index('by_email', ['email'])
    .searchIndex('search_name', { searchField: 'name' })
    .searchIndex('search_email', { searchField: 'email' }),

  projects: defineTable({
    //Basic Project Info
    title: v.string(),
    userId: v.id('users'),

    // Canvas Dimensions and state

    canvasState: v.any(), // Febric.js Canvas JSON (object, layers etc)
    width: v.number(), // Canvas width in pixels
    height: v.number(), // Canvas height in pixels

    // Image Pipeline Info - Tracks Image transformations

    originalImageUrl: v.optional(v.string()), // initial uploaded image
    currentImageUrl: v.optional(v.string()), // current image after edits
    thumbnailUrl: v.optional(v.string()), // HW: Small preview for dashboard

    // Imagekit transformation state

    activeTransformations: v.optional(v.string()), // current ImageKit URL Params
    //Ai Fectures state - track what Ai processing has been applied

    backgroundRemoved: v.optional(v.boolean()),

    // Organization

    folderId: v.optional(v.id('folders')),

    //Timestamps

    createdAt: v.number(),
    updatedAt: v.number(), //Last Updated time
  })
    .index('by_user', ['userId'])
    .index('by_user_updated', ['userId', 'updatedAt'])
    .index('by_folder', ['folderId']), // projects in folder

  folders: defineTable({
    name: v.string(), //Folder name
    userId: v.id('users'), // Owner of folder
    createdAt: v.number(),
  }).index('by_user', ['userId']),
})

// PLANS LIMIT EXAMPLE:

// - Free Plan: max 3 projects, 20 exports/month. basic features only
// - Pro Plan: unlimited projects, All AI features
