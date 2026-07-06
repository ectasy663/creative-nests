import { create } from 'zustand'
import { WorkProject } from './db'

interface UIState {
  activeProject: WorkProject | null
  setActiveProject: (project: WorkProject | null) => void
  activeImage: string | null
  setActiveImage: (image: string | null) => void
  activeVideo: string | null
  setActiveVideo: (video: string | null) => void
}

export const useUIStore = create<UIState>((set) => ({
  activeProject: null,
  setActiveProject: (project) => set({ activeProject: project, activeImage: null, activeVideo: null }),
  activeImage: null,
  setActiveImage: (image) => set({ activeImage: image }),
  activeVideo: null,
  setActiveVideo: (video) => set({ activeVideo: video })
}))
