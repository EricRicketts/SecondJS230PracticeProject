let initializedStudents = [
  { id: 1, email: "esmeralda.weber@huel.biz", name: "Dashawn Bergstrom", bookings: [] },
  { id: 2, email: "marquise@jacobi.info", name: "Bettie Swaniawski",
    bookings: [
      {
        staff: { id: 1, name: "Fae Kassulke V", email: "ewald@mills.com" },
        booking: { date: "07-03-18", time: "06:30" }
      }
    ]
  },
  { id: 3, email: "keaton@morar.io", name: "Madaline Armstrong",
    bookings: [
      {
        staff: { id: 2, name: "Aaron Nitzsche", email: "kali@rosenbaumtremblay.biz" },
        booking: { date: "08-02-18", time: "07:20" }
      }
    ]
  },
  { id: 4, email: "aniya@dachkuphal.biz", name: "Julius Balistreri",
    bookings: [
      {
        staff: { id: 3, name: "Gia Rice", email: "steve_marvin@bergnaum.co" },
        booking: { date: "09-02-18", time: "08:20" }
      }
    ]
  },
  { id: 5, email: "enrico_prosacco@ortiz.com", name: "Mrs. Randy Roob", bookings: [] }
];

let initializedStaff = [
  { id: 1, name: "Fae Kassulke V", email: "ewald@mills.com",
    bookings: [
      {
        student: { id:2, email: "marquise@jacobi.info", name: "Bettie Swaniawski" },
        booking: { date: "07-03-18", time: "06:30" }
      }
    ]
  },
  { id: 2, name: "Aaron Nitzsche", email: "kali@rosenbaumtremblay.biz",
    bookings: [
      {
        student: { id: 3, email: "keaton@morar.io", name: "Madaline Armstrong" },
        booking: { date: "08-02-18", time: "07:20" }
      }
    ]
  },
  { id: 3, name: "Gia Rice", email: "steve_marvin@bergnaum.co",
    bookings: [
      {
        student: {id: 4, email: "aniya@dachkuphal.biz", name: "Julius Balistreri" },
        booking: { date: "09-02-18",time: "08:20" }
      }
    ]
  },
  { id: 4, name: "Esperanza Doyle", email: "jacques@monahanboehm.org", bookings: [] },
  { id: 5, name: "Lacey Kautzer I", email: "gina.harber@ruelturner.io", bookings: [] }
]

export { initializedStudents, initializedStaff };