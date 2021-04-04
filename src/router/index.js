import { createRouter, createWebHistory } from 'vue-router'
import homepage from '../views/Homepage.vue'
import document from '../views/Document.vue'
import register from '../Register.vue'
import login from '../Login.vue'
import document_1 from '../views/Document_1.vue'
import document_1_1 from '../views/Document_1(1).vue'
import document_1_2 from '../views/Document_1(2).vue'
import document_1_3 from '../views/Document_1(3).vue'
import document_1_4 from '../views/Document_1(4).vue'
import document_2 from '../views/Document_2.vue'
import document_3 from '../views/Document_3.vue'
import document_4 from '../views/Document_4.vue'
import document_5 from '../views/Document_5.vue'
import document_6 from '../views/Document_6.vue'
import document_7 from '../views/Document_7.vue'
import document_8 from '../views/Document_8.vue'
import document_9 from '../views/Document_9.vue'
import document_10 from '../views/Document_10.vue'
import document_11 from '../views/Document_11.vue'
import document_11_1 from '../views/Document_11(1).vue'
import document_12 from '../views/Document_12.vue'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: homepage
  },
  {
    path: '/เอกสาร',
    name: 'Document',
    component: document
  },
  {
    path: '/ใบขับขี่',
    name: 'Document1',
    component: document_1
  },
  {
    path: '/ใบขับขี่รถยนต์ส่วนบุคคลชั่วคราว',
    name: 'Document_1_1',
    component: document_1_1
  },
  {
    path: '/ใบขับขี่รถยนต์ส่วนบุคคล',
    name: 'Document1_2',
    component: document_1_2
  },
  {
    path: '/ต่ออายุใบขับขี่รถยนต์ส่วนบุคคล',
    name: 'Document1_3',
    component: document_1_3
  },
  {
    path: '/ใบขับขี่ระหว่างประเทศ',
    name: 'Document1_4',
    component: document_1_4
  },
  {
    path: '/บัตรประชาชน',
    name: 'Document2',
    component: document_2
  },
  {
    path: '/หนังสือเดินทาง',
    name: 'Document3',
    component: document_3
  },
  {
    path: '/แจ้งเกิด',
    name: 'Document4',
    component: document_4
  },
  {
    path: '/แจ้งตาย',
    name: 'Document5',
    component: document_5
  },
  {
    path: '/แจ้งย้าย',
    name: 'Document6',
    component: document_6
  },
  {
    path: '/จดทะเบียนสมรส',
    name: 'Document7',
    component: document_7
  },
  {
    path: '/จดทะเบียนหย่า',
    name: 'Document8',
    component: document_8
  },
  {
    path: '/พินัยกรรม',
    name: 'Document9',
    component: document_9
  },
  {
    path: '/รับรองบุตร',
    name: 'Document10',
    component: document_10
  },
  {
    path: '/ติดต่อรับศพ',
    name: 'Document11_1',
    component: document_11
  },
  {
    path: '/ติดต่อรับศพ',
    name: 'Document11',
    component: document_11_1
  },
  {
    path: '/บันทึกฐานะแห่งครอบครัว',
    name: 'Document12',
    component: document_12
  },
  {
    path: '/สมัครสมาชิก',
    name: 'register',
    component: register
  },
  {
    path: '/เข้าสู่ระบบ',
    name: 'login',
    component: login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
