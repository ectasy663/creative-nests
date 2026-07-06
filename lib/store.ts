import { create } from 'zustand'
import { WorkProject } from './db'

// ── UI State (modals, filters, menus) ────────────────────────────────────────
interface UIState {
  // Mobile nav
  isMobileMenuOpen: boolean
  toggleMobileMenu: () => void
  closeMobileMenu: () => void

  // Work portfolio modal
  activeProject: WorkProject | null
  setActiveProject: (project: WorkProject | null) => void

  // Media state inside the modal
  activeImage: string | null
  setActiveImage: (image: string | null) => void
  activeVideo: string | null
  setActiveVideo: (video: string | null) => void

  // Work page category filter
  workCategory: string
  setWorkCategory: (cat: string) => void
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  toggleMobileMenu: () => set((s) => ({ isMobileMenuOpen: !s.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),

  activeProject: null,
  // When a new project is opened, reset the media selections
  setActiveProject: (project) =>
    set({ activeProject: project, activeImage: null, activeVideo: null }),

  activeImage: null,
  setActiveImage: (image) => set({ activeImage: image }),

  activeVideo: null,
  setActiveVideo: (video) => set({ activeVideo: video }),

  workCategory: 'All',
  setWorkCategory: (cat) => set({ workCategory: cat }),
}))
