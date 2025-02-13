import { db } from 'src/lib/db'
import {
  foreignKeyReplacement,
  enforceAlphaNumeric,
  generateUniqueString,
  destroyImage,
} from 'src/services/helpers'
import { requireAuth } from 'src/lib/auth'
import { requireOwnership } from 'src/lib/owner'

export const parts = ({ userName }) => {
  if (!userName) {
    return db.part.findMany({ where: { deleted: false } })
  }
  return db.part.findMany({
    where: {
      deleted: false,
      user: {
        userName,
      },
    },
  })
}

export const part = ({ id }) => {
  return db.part.findUnique({
    where: { id },
  })
}
export const partByUserAndTitle = async ({ userName, partTitle }) => {
  const user = await db.user.findUnique({
    where: {
      userName,
    },
  })
  return db.part.findUnique({
    where: {
      title_userId: {
        title: partTitle,
        userId: user.id,
      },
    },
  })
}

export const createPart = async ({ input }) => {
  requireAuth()
  return db.part.create({
    data: foreignKeyReplacement(input),
  })
}

export const forkPart = async ({ input }) => {
  // Only difference between create and fork part is that fork part will generate a unique title
  // (for the user) if there is a conflict
  const isUniqueCallback = async (seed) =>
    db.part.findUnique({
      where: {
        title_userId: {
          title: seed,
          userId: input.userId,
        },
      },
    })
  const title = await generateUniqueString(input.title, isUniqueCallback)
  // TODO change the description to `forked from userName/partName ${rest of description}`
  return db.part.create({
    data: foreignKeyReplacement({ ...input, title }),
  })
}

export const updatePart = async ({ id, input }) => {
  requireAuth()
  await requireOwnership({ partId: id })
  if (input.title) {
    input.title = enforceAlphaNumeric(input.title)
  }
  const originalPart = await db.part.findUnique({ where: { id } })
  const imageToDestroy =
    originalPart.mainImage !== input.mainImage && originalPart.mainImage
  const update = await db.part.update({
    data: foreignKeyReplacement(input),
    where: { id },
  })
  if (imageToDestroy) {
    console.log(`image destroyed, publicId: ${imageToDestroy}, partId: ${id}`)
    // destroy after the db has been updated
    destroyImage({ publicId: imageToDestroy })
  }
  return update
}

export const deletePart = async ({ id }) => {
  requireAuth()
  await requireOwnership({ partId: id })
  return db.part.update({
    data: {
      deleted: true,
    },
    where: { id },
  })
}

export const Part = {
  user: (_obj, { root }) =>
    db.part.findUnique({ where: { id: root.id } }).user(),
  Comment: (_obj, { root }) =>
    db.part.findUnique({ where: { id: root.id } }).Comment(),
  Reaction: (_obj, { root }) =>
    db.part
      .findUnique({ where: { id: root.id } })
      .Reaction({ where: { userId: _obj.userId } }),
}
