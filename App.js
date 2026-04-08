import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Dimensions,
  StatusBar,
} from 'react-native';

const { width } = Dimensions.get('window');

const COLORS = {
  bg: '#0a0a0f',
  bg2: '#111118',
  bg3: '#16161f',
  border: 'rgba(255,255,255,0.08)',
  border2: 'rgba(255,255,255,0.14)',
  text: '#f0eee8',
  muted: '#7a7a8a',
  accent: '#c8f56a',
  teal: '#5de8c0',
  gold: '#e8c86a',
  card: '#1a1a26',
};

// ─── SCREEN 1: Page d'Accueil ───────────────────────────────────────────────
function HomeScreen({ onNext }) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <ScrollView contentContainerStyle={styles.homeContainer}>
        <View style={styles.homeNav}>
          <View style={styles.logoRow}>
            <View style={styles.logoDot} />
            <Text style={styles.logoText}>Vestly</Text>
          </View>
        </View>

        <View style={styles.heroSection}>
          <View style={styles.badge}>
            <View style={styles.badgeDot} />
            <Text style={styles.badgeText}>NOUVEAU — Prélèvements automatiques</Text>
          </View>

          <Text style={styles.heroTitle}>
            Épargnez pour vos{' '}
            <Text style={styles.heroAccent}>rêves,</Text>
            {'\n'}sous la lueur{'\n'}des villes.
          </Text>

          <Text style={styles.heroSub}>
            L'appli pour épargner, investir et faire fructifier votre argent sans complexité. Définissez vos objectifs, de l'achat d'une voiture au voyage de vos rêves.
          </Text>

          <TouchableOpacity style={styles.btnPrimary} onPress={onNext}>
            <Text style={styles.btnPrimaryText}>Démarrer</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNum}>€<Text style={styles.statAccent}>2.4</Text>M</Text>
            <Text style={styles.statDesc}>Épargne gérée</Text>
          </View>
          <View style={[styles.statItem, styles.statBorder]}>
            <Text style={styles.statNum}><Text style={styles.statAccent}>18</Text>k+</Text>
            <Text style={styles.statDesc}>Projets créés</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNum}><Text style={styles.statAccent}>94</Text>%</Text>
            <Text style={styles.statDesc}>Objectifs atteints</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── SCREEN 2: Tableau de Bord ──────────────────────────────────────────────
function DashboardScreen({ onNext }) {
  const projects = [
    { name: 'Voyage au Japon', pct: 60, color: COLORS.accent },
    { name: 'Nouvel ordi', pct: 15, color: COLORS.teal },
  ];

  const bars = [30, 45, 38, 60, 55, 72, 85, 100];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <ScrollView contentContainerStyle={styles.dashContainer}>
        <View style={styles.dashNav}>
          <View style={styles.logoRow}>
            <View style={styles.logoDot} />
            <Text style={styles.logoText}>Vestly</Text>
          </View>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
        </View>

        <Text style={styles.dashGreet}>Bonjour, Jordan 👋</Text>
        <Text style={styles.dashSub}>Voici l'état de votre épargne</Text>

        <View style={styles.mainCard}>
          <View style={styles.cardTopRow}>
            <Text style={styles.cardLabel}>ÉPARGNE TOTALE</Text>
            <View style={styles.cardTag}>
              <Text style={styles.cardTagText}>+12.4% ce mois</Text>
            </View>
          </View>
          <Text style={styles.cardAmount}>+2 377,00 €</Text>
          <Text style={styles.cardGrowth}>↑ 35% de vos objectifs atteints</Text>

          <View style={styles.miniChart}>
            {bars.map((h, i) => (
              <View
                key={i}
                style={[
                  styles.bar,
                  {
                    height: (h / 100) * 50,
                    backgroundColor:
                      i >= 6 ? COLORS.accent :
                      i >= 3 ? 'rgba(200,245,106,0.35)' :
                      COLORS.border2,
                  },
                ]}
              />
            ))}
          </View>
        </View>

        <Text style={styles.sectionTitle}>Vos projets</Text>
        {projects.map((p, i) => (
          <View key={i} style={styles.projectCard}>
            <View style={styles.projectRow}>
              <View style={[styles.projectIcon, { backgroundColor: p.color + '20' }]}>
                <Text style={{ fontSize: 18 }}>{i === 0 ? '✈️' : '💻'}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.projectName}>{p.name}</Text>
                <View style={styles.progressBg}>
                  <View style={[styles.progressFill, { width: `${p.pct}%`, backgroundColor: p.color }]} />
                </View>
              </View>
              <Text style={styles.projectPct}>{p.pct}%</Text>
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.btnPrimary} onPress={onNext}>
          <Text style={styles.btnPrimaryText}>+ Créer un nouveau projet</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// ─── SCREEN 3: Type de projet ────────────────────────────────────────────────
function ProjectTypeScreen({ onNext }) {
  const [selected, setSelected] = useState(null);
  const types = [
    { id: 'voyage', label: 'Voyage', emoji: '✈️' },
    { id: 'voiture', label: 'Achat de voiture', emoji: '🚗' },
    { id: 'urgence', label: "Réserves d'urgence", emoji: '💰' },
    { id: 'autres', label: 'Autres', emoji: '❓' },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <View style={styles.stepContainer}>
        <View style={styles.stepHeader}>
          <View style={styles.stepPills}>
            {[1, 2, 3].map(n => (
              <View key={n} style={[styles.stepPill, n === 1 && styles.stepPillActive]} />
            ))}
          </View>
          <Text style={styles.stepLabel}>Étape 1 sur 3</Text>
        </View>

        <Text style={styles.stepTitle}>Créer un Nouveau Projet</Text>
        <Text style={styles.stepQuestion}>Quel est votre projet ?</Text>

        <View style={styles.typeGrid}>
          {types.map(t => (
            <TouchableOpacity
              key={t.id}
              style={[styles.typeCard, selected === t.id && styles.typeCardSelected]}
              onPress={() => setSelected(t.id)}
            >
              <Text style={styles.typeEmoji}>{t.emoji}</Text>
              <Text style={[styles.typeLabel, selected === t.id && styles.typeLabelSelected]}>
                {t.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={[styles.btnPrimary, !selected && styles.btnDisabled]}
          onPress={selected ? onNext : null}
        >
          <Text style={styles.btnPrimaryText}>Suivant</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// ─── SCREEN 4: Date d'Échéance ───────────────────────────────────────────────
function DateScreen({ onNext }) {
  const [selectedDay, setSelectedDay] = useState(15);
  const days = ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'];
  const weeks = [
    [null, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, null, null, null, null],
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <View style={styles.stepContainer}>
        <View style={styles.stepHeader}>
          <View style={styles.stepPills}>
            {[1, 2, 3].map(n => (
              <View key={n} style={[styles.stepPill, n <= 2 && styles.stepPillActive]} />
            ))}
          </View>
          <Text style={styles.stepLabel}>Étape 2 sur 3</Text>
        </View>

        <Text style={styles.stepTitle}>Date d'Échéance</Text>
        <Text style={styles.stepQuestion}>Quand souhaitez-vous{'\n'}atteindre votre objectif ?</Text>

        <View style={styles.calCard}>
          <View style={styles.calHeader}>
            <TouchableOpacity><Text style={styles.calNav}>‹</Text></TouchableOpacity>
            <Text style={styles.calMonth}>Novembre 2026</Text>
            <TouchableOpacity><Text style={styles.calNav}>›</Text></TouchableOpacity>
          </View>

          <View style={styles.calDaysRow}>
            {days.map(d => (
              <Text key={d} style={styles.calDayLabel}>{d}</Text>
            ))}
          </View>

          {weeks.map((week, wi) => (
            <View key={wi} style={styles.calWeekRow}>
              {week.map((day, di) => (
                <TouchableOpacity
                  key={di}
                  style={[styles.calDay, day === selectedDay && styles.calDaySelected]}
                  onPress={() => day && setSelectedDay(day)}
                >
                  <Text style={[
                    styles.calDayText,
                    !day && { opacity: 0 },
                    day === selectedDay && styles.calDayTextSelected,
                  ]}>
                    {day || '-'}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        <Text style={styles.calHint}>Choisissez la date cible ou une durée.</Text>

        <View style={{ flex: 1 }} />

        <TouchableOpacity style={styles.btnPrimary} onPress={onNext}>
          <Text style={styles.btnPrimaryText}>Suivant</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// ─── SCREEN 5: Montant à Économiser ─────────────────────────────────────────
function AmountScreen({ onReset }) {
  const [amount, setAmount] = useState('');
  const quickAmounts = ['+100€', '+500€', '+1000€', 'Personnalisé'];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <View style={styles.stepContainer}>
        <View style={styles.stepHeader}>
          <View style={styles.stepPills}>
            {[1, 2, 3].map(n => (
              <View key={n} style={[styles.stepPill, styles.stepPillActive]} />
            ))}
          </View>
          <Text style={styles.stepLabel}>Étape 3 sur 3</Text>
        </View>

        <Text style={styles.stepTitle}>Montant à Économiser</Text>
        <Text style={styles.stepQuestion}>Combien souhaitez-vous{'\n'}économiser ?</Text>

        <View style={styles.amountInputContainer}>
          <Text style={styles.currencySymbol}>€</Text>
          <TextInput
            style={styles.amountInput}
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor={COLORS.muted}
          />
        </View>

        <Text style={styles.qcmLabel}>QCM</Text>
        <View style={styles.qcmGrid}>
          {quickAmounts.map((q, i) => (
            <TouchableOpacity
              key={i}
              style={styles.qcmBtn}
              onPress={() => {
                if (q !== 'Personnalisé') {
                  const val = q.replace('+', '').replace('€', '');
                  setAmount(prev => String((parseInt(prev) || 0) + parseInt(val)));
                }
              }}
            >
              <Text style={styles.qcmBtnText}>{q}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.monthlyCard}>
          <Text style={styles.monthlyLabel}>Épargne mensuelle estimée</Text>
          <Text style={styles.monthlyValue}>
            {amount ? `${Math.round(parseInt(amount) / 12)} €/mois` : '— €/mois'}
          </Text>
        </View>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={[styles.btnPrimary, !amount && styles.btnDisabled]}
          onPress={amount ? onReset : null}
        >
          <Text style={styles.btnPrimaryText}>Confirmer mon projet ✓</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnGhost} onPress={onReset}>
          <Text style={styles.btnGhostText}>Retour à l'accueil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// ─── ROOT APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState(0);

  const next = () => setScreen(s => Math.min(s + 1, 4));
  const reset = () => setScreen(0);

  const screens = [
    <HomeScreen onNext={next} />,
    <DashboardScreen onNext={next} />,
    <ProjectTypeScreen onNext={next} />,
    <DateScreen onNext={next} />,
    <AmountScreen onReset={reset} />,
  ];

  return screens[screen];
}

// ─── STYLES ──────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  // HOME
  homeContainer: {
    padding: 24,
    paddingBottom: 40,
  },
  homeNav: {
    marginBottom: 40,
    marginTop: 8,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.accent,
  },
  logoText: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: -0.3,
  },
  heroSection: {
    marginBottom: 40,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(200,245,106,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(200,245,106,0.25)',
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.accent,
  },
  badgeText: {
    color: COLORS.accent,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  heroTitle: {
    color: COLORS.text,
    fontSize: 36,
    fontWeight: '800',
    lineHeight: 44,
    letterSpacing: -0.5,
    marginBottom: 16,
  },
  heroAccent: {
    color: COLORS.accent,
  },
  heroSub: {
    color: COLORS.muted,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 32,
  },
  btnPrimary: {
    backgroundColor: COLORS.accent,
    borderRadius: 100,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  btnPrimaryText: {
    color: '#0a0a0f',
    fontSize: 16,
    fontWeight: '700',
  },
  btnDisabled: {
    opacity: 0.4,
  },
  btnGhost: {
    borderRadius: 100,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border2,
  },
  btnGhostText: {
    color: COLORS.muted,
    fontSize: 15,
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: COLORS.bg3,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.border,
  },
  statNum: {
    color: COLORS.text,
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  statAccent: {
    color: COLORS.accent,
  },
  statDesc: {
    color: COLORS.muted,
    fontSize: 11,
    marginTop: 4,
    textAlign: 'center',
  },

  // DASHBOARD
  dashContainer: {
    padding: 24,
    paddingBottom: 40,
  },
  dashNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 8,
  },
  avatarCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(200,245,106,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.accent + '40',
  },
  avatarText: {
    color: COLORS.accent,
    fontSize: 13,
    fontWeight: '700',
  },
  dashGreet: {
    color: COLORS.text,
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: -0.3,
    marginBottom: 4,
  },
  dashSub: {
    color: COLORS.muted,
    fontSize: 14,
    marginBottom: 24,
  },
  mainCard: {
    backgroundColor: COLORS.bg3,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.border2,
    marginBottom: 24,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardLabel: {
    color: COLORS.muted,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  cardTag: {
    backgroundColor: 'rgba(93,232,192,0.12)',
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: 'rgba(93,232,192,0.2)',
  },
  cardTagText: {
    color: COLORS.teal,
    fontSize: 11,
    fontWeight: '700',
  },
  cardAmount: {
    color: COLORS.text,
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  cardGrowth: {
    color: COLORS.accent,
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 16,
  },
  miniChart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 50,
    gap: 5,
  },
  bar: {
    flex: 1,
    borderRadius: 3,
  },
  sectionTitle: {
    color: COLORS.text,
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 12,
    letterSpacing: -0.2,
  },
  projectCard: {
    backgroundColor: COLORS.bg3,
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  projectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  projectIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectName: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  progressBg: {
    height: 4,
    backgroundColor: COLORS.border2,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: 4,
    borderRadius: 4,
  },
  projectPct: {
    color: COLORS.muted,
    fontSize: 13,
    fontWeight: '700',
  },

  // STEPS COMMON
  stepContainer: {
    flex: 1,
    padding: 24,
    paddingTop: 16,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
    marginTop: 8,
  },
  stepPills: {
    flexDirection: 'row',
    gap: 6,
  },
  stepPill: {
    width: 28,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.border2,
  },
  stepPillActive: {
    backgroundColor: COLORS.accent,
  },
  stepLabel: {
    color: COLORS.muted,
    fontSize: 12,
    fontWeight: '600',
  },
  stepTitle: {
    color: COLORS.muted,
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.3,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  stepQuestion: {
    color: COLORS.text,
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: -0.4,
    lineHeight: 34,
    marginBottom: 32,
  },

  // PROJECT TYPE
  typeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  typeCard: {
    width: (width - 60) / 2,
    backgroundColor: COLORS.bg3,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  typeCardSelected: {
    borderColor: COLORS.accent,
    backgroundColor: 'rgba(200,245,106,0.07)',
  },
  typeEmoji: {
    fontSize: 32,
    marginBottom: 10,
  },
  typeLabel: {
    color: COLORS.muted,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  typeLabelSelected: {
    color: COLORS.accent,
  },

  // CALENDAR
  calCard: {
    backgroundColor: COLORS.bg3,
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 12,
  },
  calHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  calNav: {
    color: COLORS.muted,
    fontSize: 22,
    fontWeight: '300',
    paddingHorizontal: 8,
  },
  calMonth: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '700',
  },
  calDaysRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  calDayLabel: {
    flex: 1,
    textAlign: 'center',
    color: COLORS.muted,
    fontSize: 12,
    fontWeight: '600',
  },
  calWeekRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  calDay: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 7,
    borderRadius: 8,
  },
  calDaySelected: {
    backgroundColor: COLORS.accent,
    borderRadius: 8,
  },
  calDayText: {
    color: COLORS.text,
    fontSize: 13,
    fontWeight: '500',
  },
  calDayTextSelected: {
    color: '#0a0a0f',
    fontWeight: '800',
  },
  calHint: {
    color: COLORS.muted,
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 8,
  },

  // AMOUNT
  amountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.bg3,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.border2,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginBottom: 24,
    gap: 8,
  },
  currencySymbol: {
    color: COLORS.accent,
    fontSize: 22,
    fontWeight: '700',
  },
  amountInput: {
    flex: 1,
    color: COLORS.text,
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  qcmLabel: {
    color: COLORS.muted,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  qcmGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 24,
  },
  qcmBtn: {
    width: (width - 72) / 2,
    backgroundColor: COLORS.bg3,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border2,
  },
  qcmBtnText: {
    color: COLORS.text,
    fontSize: 15,
    fontWeight: '700',
  },
  monthlyCard: {
    backgroundColor: 'rgba(200,245,106,0.08)',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(200,245,106,0.2)',
    alignItems: 'center',
    marginBottom: 8,
  },
  monthlyLabel: {
    color: COLORS.muted,
    fontSize: 12,
    marginBottom: 4,
  },
  monthlyValue: {
    color: COLORS.accent,
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.3,
  },
});
