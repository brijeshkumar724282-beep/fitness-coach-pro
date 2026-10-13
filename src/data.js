export const STATS = [
  { value: 1200, suffix: '+', label: 'Sessions coached' },
  { value: 340, suffix: '+', label: 'Transformations' },
  { value: 12, suffix: ' yrs', label: 'Coaching experience' },
  { value: 96, suffix: '%', label: 'Stay past month one' },
]

export const PROGRAMS = [
  {
    id: 'strength',
    name: 'Strength Foundations',
    tag: 'Build muscle',
    level: 'Beginner to intermediate',
    duration: '8 weeks',
    sessions: '3 per week',
    color: '#D6F93C',
    summary: 'Barbell basics done right. Squat, hinge, push, pull and carry with a coach watching every rep.',
    details: ['Full movement screen on day one', 'Progressive overload plan in an app', 'Video form checks every week', 'Deload and retest in week 8'],
    outcome: 'Most clients add 20 to 40 kg to their total across the big lifts.',
  },
  {
    id: 'hiit',
    name: 'HIIT Ignite',
    tag: 'Burn fat',
    level: 'All levels',
    duration: '6 weeks',
    sessions: '4 per week',
    color: '#FF6B4A',
    summary: 'Short sharp circuits that raise conditioning fast without wrecking recovery.',
    details: ['30 minute coached circuits', 'Heart rate zones kept simple', 'Low impact options every round', 'Sweat test retest each fortnight'],
    outcome: 'Expect better engine, lower resting heart rate and visible conditioning.',
  },
  {
    id: 'yoga',
    name: 'Strong Yoga Flow',
    tag: 'Move well',
    level: 'All levels',
    duration: 'Ongoing',
    sessions: '2 per week',
    color: '#7CC7FF',
    summary: 'Mobility plus strength. Hips, spine and shoulders opened up then loaded with control.',
    details: ['60 minute guided flows', 'Breath led pacing', 'Props provided in studio', 'Monthly mobility benchmark'],
    outcome: 'Move without stiffness and lift with better positions.',
  },
  {
    id: 'nutrition',
    name: 'Fuel Nutrition',
    tag: 'Eat smart',
    level: 'All levels',
    duration: '12 weeks',
    sessions: 'Weekly checkin',
    color: '#B9A7FF',
    summary: 'Habit based eating. No crash diets, just protein targets and plates you enjoy.',
    details: ['Personal calorie and protein range', 'Weekly photo food review', 'Eating out playbook', 'Sleep and steps targets'],
    outcome: 'Steady fat loss of 0.4 to 0.8 kg per week for most clients.',
  },
]

export const SCHEDULE = [
  { id: 'mon-0600', day: 'Mon', time: '06:00', title: 'Strength Club', coach: 'Mara', spots: 12, intensity: 'High' },
  { id: 'mon-1800', day: 'Mon', time: '18:00', title: 'HIIT Ignite', coach: 'Dev', spots: 16, intensity: 'High' },
  { id: 'tue-0700', day: 'Tue', time: '07:00', title: 'Strong Flow', coach: 'Aya', spots: 14, intensity: 'Low' },
  { id: 'tue-1830', day: 'Tue', time: '18:30', title: 'Strength Club', coach: 'Mara', spots: 12, intensity: 'High' },
  { id: 'wed-0600', day: 'Wed', time: '06:00', title: 'HIIT Ignite', coach: 'Dev', spots: 16, intensity: 'High' },
  { id: 'wed-1900', day: 'Wed', time: '19:00', title: 'Mobility Reset', coach: 'Aya', spots: 20, intensity: 'Low' },
  { id: 'thu-0700', day: 'Thu', time: '07:00', title: 'Strength Club', coach: 'Mara', spots: 12, intensity: 'Med' },
  { id: 'thu-1800', day: 'Thu', time: '18:00', title: 'Box Conditioning', coach: 'Dev', spots: 14, intensity: 'High' },
  { id: 'fri-0600', day: 'Fri', time: '06:00', title: 'HIIT Ignite', coach: 'Dev', spots: 16, intensity: 'High' },
  { id: 'fri-1730', day: 'Fri', time: '17:30', title: 'Strong Flow', coach: 'Aya', spots: 14, intensity: 'Low' },
  { id: 'sat-0900', day: 'Sat', time: '09:00', title: 'Team Workout', coach: 'All coaches', spots: 24, intensity: 'Med' },
  { id: 'sat-1100', day: 'Sat', time: '11:00', title: 'Fuel Workshop', coach: 'Mara', spots: 20, intensity: 'Low' },
  { id: 'sun-1000', day: 'Sun', time: '10:00', title: 'Long Flow', coach: 'Aya', spots: 18, intensity: 'Low' },
]

export const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export const PLANS = [
  {
    id: 'dropin',
    name: 'Drop In',
    price: 19,
    per: 'per class',
    features: ['Any group class', 'App tracking', 'Locker access', 'Bring a friend monthly'],
    featured: false,
  },
  {
    id: 'pro',
    name: 'Forge Pro',
    price: 79,
    per: 'per month',
    features: ['Unlimited group classes', 'One PT session monthly', 'Nutrition checkin', 'Priority booking', 'Guest pass quarterly'],
    featured: true,
  },
  {
    id: 'elite',
    name: 'Elite 1 to 1',
    price: 249,
    per: 'per month',
    features: ['Weekly personal training', 'Custom program plus food plan', 'Message support', 'Quarterly retest'],
    featured: false,
  },
]

export const TESTIMONIALS = [
  {
    name: 'Jonas K.',
    program: 'Strength Foundations',
    quote: 'Squat went from shaky to 120 kg. The video feedback each week kept me honest.',
    before: 72,
    after: 88,
    metric: 'Strength score',
  },
  {
    name: 'Priya S.',
    program: 'Fuel Nutrition',
    quote: 'Down 9 kg in twelve weeks and I still eat out twice a week. Habits finally stuck.',
    before: 58,
    after: 91,
    metric: 'Habit score',
  },
  {
    name: 'Tom R.',
    program: 'HIIT Ignite',
    quote: 'Resting heart rate dropped eleven points. I finish workouts feeling strong, not smashed.',
    before: 64,
    after: 93,
    metric: 'Engine score',
  },
]
