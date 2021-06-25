import Vue from 'vue'
import _ from 'lodash'
import moment from 'moment'
import staticCoupons from '~/static/coupons.json'

export const state = () => ({
  coupons: [],
  displayedCoupons: [],
})

export const getters = {
  count(state) {
    return state.coupons.length
  },
  heatTimeMap(state) {
    const types = groupByType(state.displayedCoupons)

    _.map(types, (couponsFromType, type) => {
      types[type] = _.merge(
        emptyByDate(state.displayedCoupons),
        countByDate(couponsFromType)
      )
    })

    return types
  },
}

export const mutations = {
  setCoupons(state, coupons) {
    state.coupons = coupons
    state.displayedCoupons = coupons
  },
  filter(state, shops) {
    state.displayedCoupons = _.filter(state.coupons, (c) =>
      shops.includes(c.webshop_id)
    )
  },
}

export const actions = {
  fetchCoupons({ commit }) {
    try {
      const coupons = _.map(staticCoupons.coupons, (c) => {
        c.period = dateRange(c.first_seen, c.last_seen)
        return c
      })
      commit('setCoupons', coupons)
    } catch (err) {
      Vue.prototype.$buefy.toast.open({
        duration: 2000,
        message: `Something went wrong loading coupons.`,
        type: 'is-danger',
      })
    }
  },
}

function dateRange(startDate, endDate) {
  const start = moment(startDate)
  const end = moment(endDate)
  const period = []

  for (
    let currentDate = start;
    currentDate <= end;
    currentDate = currentDate.add(1, 'month')
  ) {
    period.push(currentDate.format('YYYY MM'))
  }

  return period
}

function sortObjectByKeys(o) {
  return Object.keys(o)
    .sort()
    .reduce((r, k) => {
      r[k] = o[k]
      return r
    }, {})
}

function countByDate(coupons) {
  const dates = {}

  _.map(coupons, (c) => {
    _.map(c.period, (date) => {
      dates[date] = date in dates ? dates[date] + 1 : 1
    })
  })

  return sortObjectByKeys(dates)
}

function emptyByDate(coupons) {
  const dates = {}

  _.map(coupons, (c) => {
    _.map(c.period, (date) => {
      dates[date] = 0
    })
  })

  return sortObjectByKeys(dates)
}

function groupByType(coupons) {
  return _.groupBy(coupons, 'promotion_type')
}
