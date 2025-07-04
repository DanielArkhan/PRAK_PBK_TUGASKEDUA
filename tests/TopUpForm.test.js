import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TopUpForm from '@/components/TopUpForm.vue'
import axios from 'axios'

// ⛔ Ganti axios.post jadi mock
vi.mock('axios')

describe('TopUpForm.vue', () => {
  beforeEach(() => {
    // Reset mock sebelum setiap test
    axios.post.mockReset()
  })

  it('tidak mengirim form jika ada data yang kosong', async () => {
    const wrapper = mount(TopUpForm)
    await wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.emitted('success')).toBeFalsy()
  })

  it('mengirim form jika data lengkap', async () => {
    // Simulasikan axios.post berhasil
    axios.post.mockResolvedValue({ data: {} })

    const wrapper = mount(TopUpForm)

    await wrapper.find('input').setValue('player123')
    await wrapper.findAll('.card-option')[0].trigger('click') // pilih package
    await wrapper.findAll('.card-option')[3].trigger('click') // pilih metode

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.emitted('success')).toBeTruthy()
    expect(wrapper.emitted('success')[0][0]).toMatchObject({
      username: 'player123',
      packageName: '60 Crystals',
      paymentMethod: 'QRIS'
    })
  })
})