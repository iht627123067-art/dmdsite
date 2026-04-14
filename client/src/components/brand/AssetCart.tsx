import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SelectedItem {
  id: string;
  name: string;
  category: string;
}

interface AssetCartProps {
  items: SelectedItem[];
  onRemove: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export function AssetCart({ items, onRemove, isOpen, onClose, onCheckout }: AssetCartProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
          />
          
          {/* Cart Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-[70] border-l border-navy-100 flex flex-col"
          >
            <div className="p-6 border-b border-navy-50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-xl text-primary">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Pacote de Assets</h3>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                    {items.length} {items.length === 1 ? 'item selecionado' : 'itens selecionados'}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
                  <ShoppingBag className="w-12 h-12" />
                  <p className="text-sm font-medium italic">Seu carrinho de marca está vazio.</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex items-center justify-between p-4 bg-navy-50/50 rounded-2xl border border-navy-100/30 group"
                  >
                    <div>
                      <p className="text-[9px] font-bold text-primary uppercase tracking-widest mb-1">{item.category}</p>
                      <p className="text-sm font-bold text-foreground leading-tight">{item.name}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onRemove(item.id)}
                      className="text-red-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all rounded-xl"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </motion.div>
                ))
              )}
            </div>

            <div className="p-6 border-t border-navy-50 bg-navy-50/20 space-y-4">
              <Button
                onClick={onCheckout}
                disabled={items.length === 0}
                className="w-full h-14 rounded-2xl bg-primary text-white font-bold uppercase tracking-widest text-xs shadow-glow hover:shadow-glow/50 disabled:opacity-50 transition-all"
              >
                Gerar Dossiê Final
              </Button>
              <p className="text-[10px] text-center text-muted-foreground leading-relaxed italic">
                Você poderá revisar todas as especificações técnicas antes da consolidação.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
