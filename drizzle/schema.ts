import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Tabela para armazenar fotos de resultados dos clientes
 * Permite que Maria Clara compartilhe resultados de terapias
 */
export const resultPhotos = mysqlTable("result_photos", {
  id: int("id").autoincrement().primaryKey(),
  /** URL da foto armazenada no S3 */
  photoUrl: text("photoUrl").notNull(),
  /** Chave do arquivo no S3 */
  fileKey: varchar("fileKey", { length: 255 }).notNull(),
  /** Tipo de terapia/serviço */
  serviceType: varchar("serviceType", { length: 100 }).notNull(),
  /** Descrição do resultado */
  description: text("description"),
  /** Nome do cliente (opcional, para privacidade) */
  clientName: varchar("clientName", { length: 100 }),
  /** Status da foto (pendente, aprovada, rejeitada) */
  status: mysqlEnum("status", ["pending", "approved", "rejected"]).default("pending").notNull(),
  /** Data de criação */
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  /** Data de atualização */
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ResultPhoto = typeof resultPhotos.$inferSelect;
export type InsertResultPhoto = typeof resultPhotos.$inferInsert;
